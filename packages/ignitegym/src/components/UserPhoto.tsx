import { ComponentProps } from "react";
import { Image } from "@gluestack-ui/themed";

type Props = Omit<ComponentProps<typeof Image>, "size"> & {
  size: Pick<ComponentProps<typeof Image>, "w">["w"];
};

export function UserPhoto({ size, ...rest }: Props) {
  return (
    <Image
      w={size}
      h={size}
      rounded="$full"
      borderWidth={2}
      borderColor="$gray400"
      {...rest}
    />
  );
}
