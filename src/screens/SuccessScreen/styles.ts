import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  background-color: ${props => props?.theme?.colors?.background};
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${props => props?.theme?.colors?.background};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 100%;
  flex: 1;
  align-items: center;
  padding: 56px 16px 0;
`;

export const Title = styled.Text`
  font-family: ${props => props?.theme?.font?.family};
  font-weight: 600;
  font-size: 21px;
  line-height: 28px;
  margin-bottom: 14px;
`;
