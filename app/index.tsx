import { Stack, Link, Redirect, router, useRouter } from 'expo-router';
import React, { useEffect } from 'react';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  // return (
  //   <React.Fragment>
  //     <Stack.Screen options={{ title: 'Home' }} />
  //     <Container>
  //       <Link href="/welcome">Welcome Screen</Link>
  //     </Container>
  //   </React.Fragment>
  // );

  return <Redirect href="/welcome" />;
}
