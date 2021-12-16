import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Main } from './src/Main';
import {StatusBar} from 'react-native';
import linking from './src/screens/linking';

const queryClient = new QueryClient();

export default function App() {
    return (
        <React.Fragment>
            <StatusBar style="auto" />
            <NavigationContainer linking={linking}>
                <QueryClientProvider client={queryClient}>
                    <Main />
                </QueryClientProvider>
            </NavigationContainer>
        </React.Fragment>
    );
}