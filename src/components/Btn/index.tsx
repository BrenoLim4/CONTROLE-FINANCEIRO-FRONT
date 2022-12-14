import { BtnProps } from './interfaces';
import { Container } from './styles';
import { DefaultMantineColor } from '@mantine/core';
import Link from 'next/link';
import theme from '@/styles/theme';

const Btn = (props: BtnProps) => {
  const {
    linkPath,
    size,
    children,
    radius,
    template,
    variant,
    color,
    onClick,
  } = props;

  const getColor = (template: BtnProps['template']): DefaultMantineColor => {
    switch (template) {
      case 'primary':
        return theme.primaryColor as DefaultMantineColor;
      case 'secondary':
        return 'green.9';
      default:
        return 'gray.1';
    }
  };

  return (
    <>
      {linkPath ? (
        <Link href={linkPath} passHref>
          <Container
            {...props}
            size={size || 'md'}
            radius={radius || 'md'}
            variant={
              template
                ? template === 'gradient'
                  ? 'gradient'
                  : 'filled'
                : variant || 'default'
            }
            color={template ? getColor(template) : color}
            onClick={(e) => {
              e.preventDefault();
              onClick(e);
            }}
          >
            {children}
          </Container>
        </Link>
      ) : (
        <Container
          {...props}
          size={size || 'md'}
          radius={radius || 'md'}
          variant={
            template
              ? template === 'gradient'
                ? 'gradient'
                : 'filled'
              : variant || 'default'
          }
          color={template ? getColor(template) : color}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </Container>
      )}
    </>
  );
};

export default Btn;
