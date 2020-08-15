import { Field, ID, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@Resolver(User)
export class UserResolver {
  @Query(() => String)
  hello() {
    return "Hello there";
  }
}
