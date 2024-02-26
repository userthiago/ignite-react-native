import { TouchableOpacityProps } from "react-native";
import { FilterContainer, FilterStyleProps, Title } from "./styles";

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...props }: FilterProps) {
  return (
    <FilterContainer isActive={isActive} {...props}>
      <Title>{title}</Title>
    </FilterContainer>
  );
}
