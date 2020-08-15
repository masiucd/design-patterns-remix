import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";

import { User } from "../entity/User";

@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  async createUser(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("age", () => Int) age: number,
  ) {
    await User.insert({ name, email, age });

    return true;
  }

  @Query(() => [User])
  async getAllUsers() {
    return await User.find();
  }
}
