import * as React from 'react';
// import styles from './VirtualMachineManagementApp.module.scss';
import { IVirtualMachineManagementAppProps } from './IVirtualMachineManagementAppProps';

export default class VirtualMachineManagementApp extends React.Component<
  IVirtualMachineManagementAppProps,
  {}
> {
  public render(): React.ReactElement<IVirtualMachineManagementAppProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
    } = this.props;

    if (hasTeamsContext) {
      console.log(
        hasTeamsContext,
        description,
        isDarkTheme,
        environmentMessage,
        userDisplayName
      );
    }

    return (
      <div className='bg-gray-100 sm:bg-blue-200'>
        <h1>SPFX Tailwind Boilerplate</h1>
      </div>
    );
  }
}
