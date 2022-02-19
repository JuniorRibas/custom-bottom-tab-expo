import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface ChatProps {
  children: ReactNode;
}

function Chat({ children }: ChatProps) {
  return (
    <Container>
      <Text>Chat</Text>
      {children}
    </Container>
  );
};

export default Chat;
