import { UserProps } from '@/interfaces';
import React from 'react';

const UserCard: React.FC<UserProps> = ({ name, username, email, company, address }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">@{username}</p>
        <a href={`mailto:${email}`} className="mt-2 text-blue-500 hover:underline">{email}</a>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-md font-semibold text-gray-700">{company.name}</p>
          <p className="text-sm text-gray-600">{address.city}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;