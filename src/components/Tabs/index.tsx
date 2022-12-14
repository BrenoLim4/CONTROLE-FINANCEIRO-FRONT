import { Container, List, Panel, Tab } from './styles';

import CustomLoader from '../CustomLoader';
import { TabsProps } from './interfaces';

const Tabs = (props: TabsProps) => {
  const { items, loading } = props;
  return (
    <div style={{ position: 'relative' }}>
      <Container
        {...props}
        variant="outline"
        defaultValue={items?.length ? '0' : null}
      >
        <List>
          {items?.map((i, index) => (
            <Tab key={index} {...i} value={index.toString()}>
              {i.label}
            </Tab>
          ))}
        </List>
        {items?.map((i, index) => (
          <Panel key={index} value={index.toString()}>
            {i.content}
            <CustomLoader visible={i.loading} />
          </Panel>
        ))}
      </Container>
      <CustomLoader visible={loading} />
    </div>
  );
};

export default Tabs;
