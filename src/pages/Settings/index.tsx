import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface SettingsProps {
  children: ReactNode;
}

function Settings({ children }: SettingsProps) {
  return (
    <Container>
      <Text>Settings</Text>
      {children}
    </Container>
  );
};

export default Settings;
