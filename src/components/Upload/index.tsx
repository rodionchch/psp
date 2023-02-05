import React, {useEffect, useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import * as s from './styles';

type UploadType = {
  onChange: (val: string | null) => void;
};

const Upload: React.FC<UploadType> = ({onChange}) => {
  const [file, setFile] = useState<string | null>(null);

  useEffect(() => {
    onChange(file);
  }, [file]);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setFile(null);

      if (!!result?.length && result?.[0]?.name) {
        setFile(result?.[0]?.name);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <s.UploadWrapper>
      <s.Upload onPress={pickFile}>
        <s.UploadIcon />
        <s.UploadPlaceholder>Прикрепить файл</s.UploadPlaceholder>
      </s.Upload>
      {file && (
        <s.UploadFiles>
          <s.UploadFile>
            <s.UploadFileName>{file}</s.UploadFileName>
            <s.UploadFileRemove
              onPress={() => {
                setFile(null);
              }}>
              <s.UploadFileRemoveIcon />
            </s.UploadFileRemove>
          </s.UploadFile>
        </s.UploadFiles>
      )}
    </s.UploadWrapper>
  );
};

export default Upload;
