import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <React.Fragment>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
      </Container>
    </React.Fragment>
  );
}
