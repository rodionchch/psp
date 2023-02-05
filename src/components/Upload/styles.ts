import styled from 'styled-components/native';
import {IStyles} from '../../styled/styled';
import iconUpload from '../../assets/icons/upload.png';
import iconRemove from '../../assets/icons/remove.png';

export const UploadWrapper = styled.View`
  flex: 100%;
`;

export const Upload = styled.TouchableOpacity<IStyles>`
  height: 48px;
  flex: 1;
  border: 1px dashed ${props => props?.theme?.colors?.main};
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  padding: 0 16px;
`;

export const UploadIcon = styled.Image.attrs({
  source: iconUpload,
})`
  width: 10px;
  height: 18px;
  margin-right: 10px;
`;

export const UploadPlaceholder = styled.Text`
  color: ${props => props?.theme?.colors?.main};
  font-weight: 500;
  font-size: 15px;
  font-family: ${props => props?.theme?.font?.family};
`;

export const UploadFiles = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const UploadFile = styled.View`
  background: #e9f0fe;
  border-radius: 18px;
  height: 29px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  flex-direction: row;
`;

export const UploadFileName = styled.Text`
  color: ${props => props?.theme?.colors?.main};
  font-family: ${props => props?.theme?.font?.family};
  font-weight: 600;
  font-size: 13px;
`;

export const UploadFileRemove = styled.TouchableOpacity`
  width: 12px;
  height: 12px;
  margin-left: 6px;
  align-items: center;
  justify-content: center;
`;

export const UploadFileRemoveIcon = styled.Image.attrs({
  source: iconRemove,
})`
  width: 8px;
  height: 8px;
`;
