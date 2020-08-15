import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Movie } from "../entity/Movie";

@Resolver()
export class MovieResolver {
  @Mutation(() => Movie)
  async createMovie(
    @Arg("title") title: string,
    @Arg("length", () => Int) length: number,
  ) {
    const newMovie = await Movie.create({ title, length }).save();
    return newMovie;
  }

  @Query(() => [Movie])
  async getMovies() {
    return await Movie.find();
  }
}
