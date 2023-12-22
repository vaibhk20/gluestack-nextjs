import {
  HStack,
  Icon,
  MessageCircleIcon,
  Pressable,
} from "@gluestack-ui/themed";
import { Bookmark, MoreHorizontal, ThumbsUp } from "lucide-react-native";

const BlogActionsFooter = () => {
  return (
    <HStack mt="$4" justifyContent="space-between" p="$2">
      <HStack space="xl">
        <Icon as={ThumbsUp} m="$1" w="$5" h="$5" color="$secondary300" />
        <Pressable flexDirection="row" alignItems="center">
          <Icon
            as={MessageCircleIcon}
            m="$1"
            w="$4.5"
            h="$4.5"
            color="$secondary300"
          />
        </Pressable>
      </HStack>
      <HStack space="2xl">
        <Icon as={Bookmark} m="$1" w="$5" h="$5" color="$secondary300" />
        <Icon as={MoreHorizontal} m="$1" w="$5" h="$5" color="$secondary300" />
      </HStack>
    </HStack>
  );
};

export default BlogActionsFooter;
