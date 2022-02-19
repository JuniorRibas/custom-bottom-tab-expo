/*
 * -----
 * File Created: Saturday, 19th February 2022 4:59:23 pm
 * Author: Junior Ribeiro
 * Copyright  2022  joseribeiroalves.dev@gmail.com , Junior Ribeiro
 * -----
 */

import { ReactNode } from "react";

import { Text } from "react-native";

import { Container } from "./styles";

interface FindProps {
  children: ReactNode;
}

function Find({ children }: FindProps) {
  return (
    <Container>
      <Text>Find</Text>
      {children}
    </Container>
  );
}

export default Find;
