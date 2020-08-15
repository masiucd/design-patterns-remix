import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Movie } from "../entity/Movie";

@InputType()
class MovieInput {
  @Field(() => String)
  title: string;

  @Field(() => Int)
  length: number;
}

@Resolver()
export class MovieResolver {
  @Mutation(() => Boolean)
  async createMovie(
    @Arg("title") title: string,
    @Arg("length", () => Int) length: number,
  ) {
    await Movie.insert({ title, length });
    return true;
  }

  @Mutation(() => [Movie])
  async updateMovie(
    @Arg("id", () => Int) id: number,
    @Arg("options", () => MovieInput) options: MovieInput,
  ) {
    await Movie.update({ id }, options);

    return await Movie.find;
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Arg("id", () => Int) id: number) {
    await Movie.delete({ id });

    return true;
  }

  @Query(() => [Movie])
  async getMovies() {
    return await Movie.find();
  }
}
