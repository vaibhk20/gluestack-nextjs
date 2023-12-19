"use client";

import React, { use, useRef, useEffect, useContext } from "react";
import {
  Button,
  Heading,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalHeader,
  ButtonText,
  Center,
  HStack,
  FormControl,
  Input,
  InputField,
  Textarea,
  TextareaInput,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Icon,
  ChevronDownIcon,
} from "@gluestack-ui/themed";
import { AlertCircleIcon } from "lucide-react-native";
import data from "@/app/data.json";
import { UserContext } from "@/context/UserContext";

const AddBlogModal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user, uploadBlog } = useContext(UserContext);
  const ref = useRef(null);
  const [isTitleValid, setIsTitleValid] = React.useState(false);
  const [isContentValid, setIsContentValid] = React.useState(false);
  const [isCategoryValid, setIsCategoryValid] = React.useState(false);
  const [isImageValid, setIsImageValid] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [category, setCategory] = React.useState<number | null>(null);
  const [image, setImage] = React.useState("");

  const handleSubmit = () => {
    if (title && content && category && image) {
      const newBlog = {
        id: data.blogs.length + 1,
        title,
        description: "",
        content,
        tagsId: category,
        media: image,
        author: user ? user?.username : "",
        likes: 4,
        date: new Date().toISOString(),
      };
      data.blogs.push(newBlog);
      uploadBlog(newBlog);
      setShowModal(false);
    }
  };
  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
    if (e.target.value.length < 1) {
      setIsTitleValid(true);
    } else {
      setIsTitleValid(false);
    }
  };
  const handleContentChange = (e: any) => {
    setContent(e.target.value);
    if (e.target.value.length < 30) {
      setIsContentValid(true);
    } else {
      setIsContentValid(false);
    }
  };
  const handleCategoryChange = (e: string) => {
    setCategory(Number(e));
    if (!e) {
      setIsCategoryValid(true);
    } else {
      setIsCategoryValid(false);
    }
  };
  const handleImageChange = (e: any) => {
    setImage(e.target.value);
    if (e.target.value.length < 1) {
      setIsImageValid(true);
    } else {
      setIsImageValid(false);
    }
  };
  useEffect(() => {
    setIsCategoryValid(false);
    setIsContentValid(false);
    setIsImageValid(false);
    setIsTitleValid(false);
    setTitle("");
    setContent("");
    setCategory(null);
    setImage("");
  }, [showModal]);

  return (
    <Center>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <HStack w="$full" justifyContent="space-between">
              <Heading size="lg">Your new story</Heading>
              <Button
                size="sm"
                action="positive"
                borderRadius="$full"
                borderWidth="$0"
                onPress={() => {
                  handleSubmit();
                }}
                isDisabled={
                  isTitleValid ||
                  isContentValid ||
                  isCategoryValid ||
                  isImageValid
                }
              >
                <ButtonText fontWeight="$normal">Publish</ButtonText>
              </Button>
            </HStack>
          </ModalHeader>
          <ModalBody pb="$6">
            <FormControl isRequired={true} isInvalid={isTitleValid}>
              <Input borderWidth="$1" mt="$3">
                <InputField placeholder="Title" onChange={handleTitleChange} />
              </Input>
              {isTitleValid ? (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    Title is required.
                  </FormControlErrorText>
                </FormControlError>
              ) : null}
            </FormControl>
            <FormControl isRequired={true} isInvalid={isContentValid}>
              <Textarea borderWidth="$1" h="$80" mt="$3">
                <TextareaInput
                  placeholder="Tell your story..."
                  onChange={handleContentChange}
                />
              </Textarea>
              {isContentValid ? (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    Content more than 30 characters is required
                  </FormControlErrorText>
                </FormControlError>
              ) : null}
            </FormControl>
            <FormControl isRequired={true} isInvalid={isCategoryValid}>
              <Select
                mt="$3"
                isRequired={true}
                onValueChange={(e) => handleCategoryChange(e)}
              >
                <SelectTrigger variant="outline" size="md">
                  <SelectInput placeholder="Select blog category" />

                  <SelectIcon>
                    <Icon as={ChevronDownIcon} />
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <>
                      {data.tags.map((tag) => (
                        <SelectItem
                          label={tag.name}
                          value={String(tag.id)}
                          key={tag.id}
                        />
                      ))}
                    </>
                  </SelectContent>
                </SelectPortal>
              </Select>
              {isCategoryValid ? (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    Please select a catogery for blog
                  </FormControlErrorText>
                </FormControlError>
              ) : null}
            </FormControl>
            <FormControl isRequired={false} isInvalid={isImageValid}>
              <Input borderWidth="$1" mt="$3" isRequired={true}>
                <InputField
                  placeholder="Paste image url"
                  onChange={handleImageChange}
                />
              </Input>
              {isImageValid ? (
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    Please provide image url
                  </FormControlErrorText>
                </FormControlError>
              ) : null}
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default AddBlogModal;
