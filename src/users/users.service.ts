import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/users.schema';
import { Model } from 'mongoose';
import { hash } from 'bcryptjs';
import { CreateUserDto } from './dto/craete-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(data: CreateUserDto) {
    try {
      const newUser = await new this.userModel({
        ...data,
        password: await hash(data.password, 10),
      });
      const user = await newUser.save();
      return { user: this.cleanUser(user) };
    } catch (error) {
      throw new ConflictException('Error', {
        description: 'Ocurrio un error (duplicidad)',
        cause: error,
      });
    }
  }

  private cleanUser(user) {
    const { password, _id, __v, ...res } = user.toObject();
    return res;
  }
}