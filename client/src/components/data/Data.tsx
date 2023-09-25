import { Typography } from '@mui/material';
import { useVkStore } from 'app/store/vk.store';
import { Dates } from 'components/Dates';
import { BaseLayout } from 'components/base/base-layout';
import { useEffect } from 'react';

import styles from './styles.module.scss';

type DataProps = {
  vktoken: string;
};

export function Data({ vktoken }: DataProps) {
  const { isLoading, fetch, myself, dates } = useVkStore();

  useEffect(() => {
    async function fetchData() {
      await fetch();
    }

    if (!myself || !dates) fetchData();
  }, []);

  if (isLoading)
    return (
      <BaseLayout>
        <Typography variant="h2">Loading</Typography>;
      </BaseLayout>
    );

  return <div className={styles.layout}>{dates && <Dates dates={dates} />}</div>;
}
