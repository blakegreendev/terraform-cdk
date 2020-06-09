import * as yargs from 'yargs';
import { render } from 'ink';
import React from 'react';
import  { Diff } from './ui/diff'

class Command implements yargs.CommandModule {
  public readonly command = 'diff [OPTIONS]';
  public readonly describe = 'Perform a diff (terraform plan) for the given stack';

  public readonly builder = (args: yargs.Argv) => args
    .showHelpOnFail(true)

  public async handler() {
    render(React.createElement(Diff));
  }
}

module.exports = new Command();

