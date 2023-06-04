export const notify = (toast, title, status, description) => {
    return toast({
      title,
      status,
      description,
      duration: 4000,
      position: "top",
      isClosable: true,
    });
  };