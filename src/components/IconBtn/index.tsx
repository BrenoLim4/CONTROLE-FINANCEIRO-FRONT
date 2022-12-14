import { DefaultMantineColor, useMantineTheme } from '@mantine/core';

import { Container } from './styles';
import { IconBtnProps } from './interfaces';
import Link from 'next/link';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const IconBtn = forwardRef<HTMLButtonElement, IconBtnProps>(
  (props: IconBtnProps, ref) => {
    const theme = useMantineTheme();
    const { linkPath, size, children, radius, template, variant, color } =
      props;

    const getColor = (
      template: IconBtnProps['template']
    ): DefaultMantineColor => {
      switch (template) {
        case 'primary':
          return theme.primaryColor as DefaultMantineColor;
        case 'secondary':
          return 'green.9';
        default:
          return 'gray.1';
      }
    };

    const getSize = (size: IconBtnProps['size']): number => {
      switch (size) {
        case 'xs':
          return 30;
        case 'sm':
          return 36;
        case 'md':
          return 42;
        case 'lg':
          return 50;
        case 'xl':
          return 60;
        default:
          return size;
      }
    };

    return (
      <>
        {linkPath ? (
          <Link href={linkPath} passHref>
            <Container
              {...props}
              size={getSize(size) || getSize('md')}
              radius={radius || 'md'}
              variant={
                template
                  ? template === 'gradient'
                    ? 'gradient'
                    : 'filled'
                  : variant || 'default'
              }
              color={template ? getColor(template) : color}
            >
              {children}
            </Container>
          </Link>
        ) : (
          <Container
            {...props}
            ref={ref}
            size={getSize(size) || getSize('md')}
            radius={radius || 'md'}
            variant={
              template
                ? template === 'gradient'
                  ? 'gradient'
                  : 'filled'
                : variant || 'default'
            }
            color={template ? getColor(template) : color}
          >
            <div>{children}</div>
          </Container>
        )}
      </>
    );
  }
);

export default IconBtn;
