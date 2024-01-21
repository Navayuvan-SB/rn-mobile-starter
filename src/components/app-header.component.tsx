import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Appbar } from 'react-native-paper';

interface AppHeaderProps {
  title: string;
  actions?: React.ReactNode[];
  goBack?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  actions,
  goBack = true,
}) => {
  const navigation = useNavigation();

  const onGoBack = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  return (
    <Appbar.Header>
      {goBack ? <Appbar.BackAction onPress={onGoBack} /> : <></>}
      <Appbar.Content
        title={title}
        titleStyle={{ fontWeight: '500', fontSize: 20 }}
        style={{ paddingLeft: 6 }}
      />
      {actions}
    </Appbar.Header>
  );
};

export default AppHeader;
