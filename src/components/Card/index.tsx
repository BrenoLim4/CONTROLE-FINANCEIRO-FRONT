import {
  CardSection,
  Group,
  Menu,
  Title,
  useMantineTheme,
} from '@mantine/core';

import { CardProps } from './interfaces';
import { Container } from './styles';
import CustomLoader from '../CustomLoader';
import { FaEllipsisV } from 'react-icons/fa';
import IconBtn from '../IconBtn';
import Link from 'next/link';

const Card = ({
  title,
  form,
  children,
  icon: Icon,
  menuItens,
  loading,
}: CardProps) => {
  const theme = useMantineTheme();
  return (
    <Container
      component={form ? 'form' : 'div'}
      withBorder
      shadow="md"
      radius="md"
      p={'xs'}
    >
      <CardSection inheritPadding p={'xs'}>
        <Group position="apart">
          <Group>
            {Icon ? <Icon size={24} width={24} heigth={24} /> : null}
            <Title order={2} weight={700} size={theme.fontSizes.xl}>
              {title}
            </Title>
          </Group>
          {menuItens?.length ? (
            <Menu withinPortal position="bottom-end" shadow="sm">
              <Menu.Target>
                <IconBtn variant="transparent" color={'gray.0'} size={16}>
                  <FaEllipsisV size={20} />
                </IconBtn>
              </Menu.Target>

              <Menu.Dropdown>
                {menuItens.map((item, index) => (
                  <>
                    {item.link ? (
                      <Link href={item.link} passHref>
                        <Menu.Item key={index} icon={item.icon}>
                          {item.children}
                        </Menu.Item>
                      </Link>
                    ) : (
                      <Menu.Item
                        onClick={item.onClick}
                        key={index}
                        icon={item.icon}
                      >
                        {item.children}
                      </Menu.Item>
                    )}
                  </>
                ))}
              </Menu.Dropdown>
            </Menu>
          ) : null}
        </Group>
      </CardSection>
      <CustomLoader visible={loading} size={32} />
      <CardSection inheritPadding p={'xs'}>
        {children}
      </CardSection>
    </Container>
  );
};

export default Card;
