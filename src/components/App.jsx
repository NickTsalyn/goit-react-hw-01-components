import { Description } from './Description/Description';
import user from '../user.json'
import { StatsList } from './StatsList/StatsList';
import { Layout } from './Layout';
import { Statistics } from './Statistics/Statistics';
import stats from '../data.json'
import friends from '../friends.json'
import { FriendList } from './FriendsList/FriendsList';
import { TransactionHistory } from './Transactions/Transactions';
import items from '../transactions.json'


export const App = () => {
  return (
    <Layout>
      <Description user={user} />
      <StatsList user={user}/>
      <Statistics stats={stats} title="Upload Stats"/>
      <FriendList friends={friends}/>
      <TransactionHistory items={items}/>
    </Layout>
  );
};
