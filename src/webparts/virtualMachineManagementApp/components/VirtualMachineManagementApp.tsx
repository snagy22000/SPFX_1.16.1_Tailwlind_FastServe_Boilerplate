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
        <div className='mx-auto max-w-screen-md px-8 py-12'>
          <img
            className='h-16'
            src='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTg1IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPHBhdGggZD0iTTEyMS4wOSAyOC4zMzZjMi4zNTIgMCA0LjM5Mi0xLjI0OCA1LjQyNC0zLjEybC0yLjY4OC0xLjUzNmMtLjQ4Ljk4NC0xLjUxMiAxLjU4NC0yLjc2IDEuNTg0LTEuODQ4IDAtMy4yMTYtMS4zNjgtMy4yMTYtMy4yNjQgMC0xLjkyIDEuMzY4LTMuMjg4IDMuMjE2LTMuMjg4IDEuMjI0IDAgMi4yNTYuNjI0IDIuNzM2IDEuNjA4bDIuNjY0LTEuNTZjLS45ODQtMS44NDgtMy4wMjQtMy4wOTYtNS4zNzYtMy4wOTYtMy42NDggMC02LjMzNiAyLjc2LTYuMzM2IDYuMzM2IDAgMy41NzYgMi42ODggNi4zMzYgNi4zMzYgNi4zMzZ6TTEzNy4wODQgMTZ2MS40MTZjLS44NjQtMS4wOC0yLjE2LTEuNzUyLTMuOTEyLTEuNzUyLTMuMTkyIDAtNS44MzIgMi43Ni01LjgzMiA2LjMzNiAwIDMuNTc2IDIuNjQgNi4zMzYgNS44MzIgNi4zMzYgMS43NTIgMCAzLjA0OC0uNjcyIDMuOTEyLTEuNzUyVjI4aDMuMDk2VjE2aC0zLjA5NnptLTMuMzM2IDkuMzg0Yy0xLjg5NiAwLTMuMzEyLTEuMzY4LTMuMzEyLTMuMzg0czEuNDE2LTMuMzg0IDMuMzEyLTMuMzg0YzEuOTIgMCAzLjMzNiAxLjM2OCAzLjMzNiAzLjM4NHMtMS40MTYgMy4zODQtMy4zMzYgMy4zODR6TTE0OS44NTEgMTguOTc2VjE2aC0yLjcxMnYtMy4zNmwtMy4wOTYuOTM2VjE2aC0yLjA4OHYyLjk3NmgyLjA4OHY0Ljk5MmMwIDMuMjQgMS40NjQgNC41MTIgNS44MDggNC4wMzJ2LTIuODA4Yy0xLjc3Ni4wOTYtMi43MTIuMDcyLTIuNzEyLTEuMjI0di00Ljk5MmgyLjcxMnpNMTUzLjU3IDE0LjU2YzEuMDU2IDAgMS45Mi0uODY0IDEuOTItMS44OTZzLS44NjQtMS45Mi0xLjkyLTEuOTJjLTEuMDMyIDAtMS44OTYuODg4LTEuODk2IDEuOTJzLjg2NCAxLjg5NiAxLjg5NiAxLjg5NnpNMTUyLjAzNCAyOGgzLjA5NlYxNmgtMy4wOTZ2MTJ6TTE2My42NzYgMjguMzM2YzMuNTI4IDAgNi4zNi0yLjc2IDYuMzYtNi4zMzYgMC0zLjU3Ni0yLjgzMi02LjMzNi02LjM2LTYuMzM2LTMuNTI4IDAtNi4zMzYgMi43Ni02LjMzNiA2LjMzNiAwIDMuNTc2IDIuODA4IDYuMzM2IDYuMzM2IDYuMzM2em0wLTMuMDI0Yy0xLjgyNCAwLTMuMjQtMS4zNjgtMy4yNC0zLjMxMiAwLTEuOTQ0IDEuNDE2LTMuMzEyIDMuMjQtMy4zMTIgMS44NDggMCAzLjI2NCAxLjM2OCAzLjI2NCAzLjMxMiAwIDEuOTQ0LTEuNDE2IDMuMzEyLTMuMjY0IDMuMzEyek0xNzguODg2IDE1LjY2NGMtMS42MDggMC0yLjg1Ni42LTMuNTc2IDEuNjhWMTZoLTMuMDk2djEyaDMuMDk2di02LjQ4YzAtMi4wODggMS4xMjgtMi45NzYgMi42NC0yLjk3NiAxLjM5MiAwIDIuMzc2Ljg0IDIuMzc2IDIuNDcyVjI4aDMuMDk2di03LjM2OGMwLTMuMTkyLTEuOTkyLTQuOTY4LTQuNTM2LTQuOTY4eiIgZmlsbD0iIzY2N0VFQSIgLz4KCTxwYXRoIGQ9Ik02MS4wNjMgMjhoMy43NjhsMy4xNDQtMTEuMDg4TDcxLjE0MyAyOGgzLjc2OGw0LjcwNC0xNi44aC0zLjQ4TDcyLjkyIDIzLjY1NiA2OS4zOTEgMTEuMkg2Ni41NmwtMy41MDQgMTIuNDU2TDU5Ljg0IDExLjJoLTMuNDhMNjEuMDYzIDI4ek04NS42NzQgMjguMzM2YzMuNTI4IDAgNi4zNi0yLjc2IDYuMzYtNi4zMzYgMC0zLjU3Ni0yLjgzMi02LjMzNi02LjM2LTYuMzM2LTMuNTI4IDAtNi4zMzYgMi43Ni02LjMzNiA2LjMzNiAwIDMuNTc2IDIuODA4IDYuMzM2IDYuMzM2IDYuMzM2em0wLTMuMDI0Yy0xLjgyNCAwLTMuMjQtMS4zNjgtMy4yNC0zLjMxMiAwLTEuOTQ0IDEuNDE2LTMuMzEyIDMuMjQtMy4zMTIgMS44NDggMCAzLjI2NCAxLjM2OCAzLjI2NCAzLjMxMiAwIDEuOTQ0LTEuNDE2IDMuMzEyLTMuMjY0IDMuMzEyek05Ny4zMDggMTguMDY0VjE2aC0zLjA5NnYxMmgzLjA5NnYtNS43MzZjMC0yLjUyIDIuMDQtMy4yNCAzLjY0OC0zLjA0OFYxNS43NmMtMS41MTIgMC0zLjAyNC42NzItMy42NDggMi4zMDR6TTExMy44MzEgMjhsLTQuOTY4LTYuMDcyTDExMy42ODcgMTZoLTMuNjk2bC00LjEyOCA1LjI4VjExLjJoLTMuMDk2VjI4aDMuMDk2di01LjQ0OEwxMTAuMjMxIDI4aDMuNnoiIGZpbGw9IiMyRDM3NDgiIC8+Cgk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjkxMSAxMi42MDRMMzYuMjEzIDguMTZ2MjAuNjQ1aDl2MmgtNDR2LTJoNHYtMTIuNzJsLTMuNzI4LjkzM0wxIDE1LjA3OGwyMS4wOS01LjI3M2gzLjEyMmE5LjU1MiA5LjU1MiAwIDAgMC0uNjggMi41NTlsLS40ODMgMy45NzUgNS4xNjQtMi45ODJ2MTUuNDQ4aDVWOC4xNjFsLTcuNjk2IDQuNDQ0YTcuNTAyIDcuNTAyIDAgMCAxIDIuNTY1LTQuOGgtNC4xMmE3LjQ4OSA3LjQ4OSAwIDAgMSA2LjY0Ni0yLjk3M2wtNS41OTEtMy4yMjhhNy40ODggNy40ODggMCAwIDEgNi42OTYuNDAyYzEuMDM5LjYgMS44OCAxLjQxIDIuNSAyLjM0N2E3LjQ2MSA3LjQ2MSAwIDAgMSAyLjUtMi4zNDcgNy40OSA3LjQ5IDAgMCAxIDYuNjk4LS40MDJsLTUuNTkzIDMuMjI4YTcuNDg4IDcuNDg4IDAgMCAxIDYuNjQ2IDIuOTczaC00LjEyYTcuNDk4IDcuNDk4IDAgMCAxIDIuNTY3IDQuOHpNMjUuMjEzIDI4LjgwNXYtMTBoLTZ2MTBoNnptLTExLThhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAweiIgZmlsbD0iIzY2N0VFQSIgLz4KPC9zdmc+'
            alt='Workcation'
          />
          <img
            className='mt-6 w-full rounded-lg shadow-xl'
            src='https://html.sammy-codes.com/images/background.jpg'
            alt='Woman Working'
          />
          <h1 className='mt-6 text-2xl font-bold text-gray-900'>
            You can work from anywhere.{' '}
            <span className='text-indigo-400'> Take advanvtage of it</span>
          </h1>
          <p className='mt-2 text-gray-600 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            maxime modi consectetur rem, laborum a debitis iusto fuga expedita
            itaque quam neque provident dolor excepturi! Natus praesentium ad
            similique quis. test
          </p>
          <div className='mt-4'>
            <a
              className='inline-block rounded-lg bg-indigo-500 px-5 py-3  text-sm font-semibold uppercase tracking-wide text-white no-underline shadow-md '
              href='#'
            >
              Book youre escape !!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
