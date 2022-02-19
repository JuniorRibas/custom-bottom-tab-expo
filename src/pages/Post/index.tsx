import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface PostProps {
  children: ReactNode;
}

function Post({ children }: PostProps) {
  return (
    <Container>
      <Text>Post</Text>
      {children}
    </Container>
  );
};

export default Post;
