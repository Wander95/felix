import React, { FC } from 'react';
import Test from './Clients/Clients';

// A cada cliente se le debe agregar u

interface IClientsProps {
  handlePath: (principal: string | null, path1: string | null)=> void
}
const Clients: FC<IClientsProps> = ({ handlePath }) => {

	return (
		<div>
      <Test handlePath={handlePath}/>
		</div>
	);
};

export default Clients;
