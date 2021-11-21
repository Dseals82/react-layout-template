import React from 'react'
import { FormWrap, FormInput, FormLabel, Container, Icon, FormContent, Form, FormH1, FormButton, Text } from './SigninElements'

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to='/'>Logo</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlForm='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlForm='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn
