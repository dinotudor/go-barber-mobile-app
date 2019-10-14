import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type your email"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="password"
          />
          <SubmitButton onPress={() => {}}>Sign In</SubmitButton>
        </Form>
        <SignLink>
          <SignLinkText>Create free account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
