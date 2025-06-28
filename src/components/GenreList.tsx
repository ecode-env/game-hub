import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../service/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data = [], isLoading, error } = useGenres();
  const skeletons = Array(10).fill(0);

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((_, index) => <GenreListSkeleton key={index} />)}

      {!isLoading &&
        data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                objectFit="cover"
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                overflow="hidden"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
