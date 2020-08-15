import { Arg, Int, Mutation, Resolver } from "type-graphql";

@Resolver()
export class DishResolver {
  @Mutation(() => Boolean)
  createDish(
    @Arg("title") title: string,
    @Arg("stars", () => Int) stars: number,
  ) {
    console.log(title);
    console.log(stars);
    return true;
  }
}
