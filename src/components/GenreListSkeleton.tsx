import {
  HStack,
  ListItem,
  Skeleton,
  SkeletonText,
  Avatar,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="10px">
      <HStack spacing="10px">
        <Skeleton borderRadius="full">
          <Avatar />
        </Skeleton>
        <SkeletonText noOfLines={1} width="100px" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
