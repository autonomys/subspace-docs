---
title: Foundry - testing and deployment
sidebar_position: 7
description: Testing and Deploying Smart Contracts using Foundry
keywords:
  - subspace network
  - book getfoundry
  - foundry
---

### Testing and deploying smart contracts using [Foundry](https://book.getfoundry.sh/)
---

1. Use `foundryup` toolchain installer
 ```bash
 curl -L https://foundry.paradigm.xyz | bash
 ```
 This will install `foundryup`, then simply follow the instructions on-screen, which will make the foundryup command available in your CLI.
 Running `foundryup` by itself will install the latest precompiled binaries: `forge`, `cast`, `anvil`, and `chisel`. See `foundryup --help` for more options.

 :::note
 If you're on Windows, you will need to install and use [Git BASH](https://gitforwindows.org/) or [WSL](https://learn.microsoft.com/en-us/windows/wsl/install), as your terminal, since Foundryup does not currently support `PowerShell` or `Cmd`.
 :::

2.  Once installed, create a project. Let’s name it `hello_subspace`.

    To initialize the project, run 
    ```bash
    forge init hello_subspace
    ```
    cd into `hello_subspace` directory and let’s have a look at the project’s structure.

    ![Foundry-1](/img/developers/Foundry-1.png)

3. All the necessary repo structure was created automatically, so we can start writing and testing our smart contracts right away. As you can see, there are separate directories for storing smart contracts (src) and testing smart contracts (test).
    Let’s have a look at the `Counter.sol` smart contract and add a few more functions to the standard behavior. Our smart contract will have three functions: `setNumber()` that sets the uint256 number to the provided value, `increment()` which increases the value by 1 and `decrement()` which decreases the value by 1.

    ```
    // SPDX-License-Identifier: UNLICENSED
    pragma solidity ^0.8.13;

    contract Counter {
        uint256 public number;

        function setNumber(uint256 newNumber) public {
            number = newNumber;
        }

        function increment() public {
            number++;
        }

        function decrement() public {
            number--;
        }
    }
    ```

4. Let’s make sure that all functions are working properly by adding a couple of tests to the `Counter.t.sol` test file and check if they pass.

    ```
    // SPDX-License-Identifier: UNLICENSED
    pragma solidity ^0.8.13;

    import "forge-std/Test.sol";
    import "../src/Counter.sol";

    contract CounterTest is Test {
        Counter public counter;

        function setUp() public {
            counter = new Counter();
            counter.setNumber(2);
        }

        function testIncrement() public {
            counter.increment();
            assertEq(counter.number(), 3);
        }

        function testSetNumber(uint256 x) public {
            counter.setNumber(x);
            assertEq(counter.number(), x);
        }

        function testDecrement() public {
            counter.decrement();
            assertEq(counter.number(), 1);
        }
    }
    ```


5. In our tests, we first set the initial value of number to two, then check if function `increment()` increases the value by 1 and if `decrement()` decreases the value by 1.
    Let’s build a project by running: 

    ```bash
    forge build
    ```

    and ensure that tests are working as expected by running 

    ```bash
    forge test
    ```

    ![Foundry-2](/img/developers/Foundry-2.png)

    Nice, all tests are passing, meaning the smart contract is working as expected.

6. Next, there are **two things** we need to set, in order to **deploy our smart contract**:
    - We need to connect a wallet that has sufficient balance of TSSC to cover the gas fees.
    - We need to set an environment variable we will use later.

    In order to make our lives easier, let’s create a new `Makefile` as well as `.env` file at the root of our project.
    `.env` files are typically used to store environment variables for your application. They are particularly useful for managing settings that change between deployment environments (e.g., development, testing, staging, and production), and for storing sensitive information.

    Environment variables can include database connection details, API keys, external resource URIs, or other configuration variables that might change depending on the environment in which the application is running. In our case, we would use it to point to our Core-EVM RPC url by setting

    ```bash
    RPC_URL=https://domain-3.evm.gemini-3f.subspace.network/ws
    ```

    And then set a private key for the EVM-compatible wallet

    ```bash
    PRIVATE_KEY=”your_private_key_value”
    ```
    
    :::tip
    It's important to note that .env files should not be committed to your source control (like Git), especially when they contain sensitive data, like your private key. To prevent this, add .env to your .gitignore file. This helps to keep sensitive keys secure and avoids the risk of exposing them in the application's code or version control history.
    :::

    In the Makefile, let’s create shortcuts to the main features of the application

    ```bash
    # include .env file and export its env vars
    -include .env

    # Builds
    build:
	    @forge clean && forge build --optimize --optimizer-runs 1000000

    # Deployment
    deploy:
	    @forge create Counter --private-key ${PRIVATE_KEY} --rpc-url ${RPC_URL}
    ```

    We're importing the values for a `PRIVATE_KEY` and `RPC_URL` from the `.env` file.

    This allows us to run `make build` for building the project and `make deploy` for deploying the project pointing to the provided RPC and using the provided private_key.

    Let’s run 

    ```
    make build
    ```

    to make sure it’s working properly.

    ![Foundry-3](/img/developers/Foundry-3.png)

7. In order to deploy your contract using the specified **`RPC`** and **`PRIVATE_KEY`** just run

    ```
    make deploy
    ```

8. **Congratulations**, you've successfully deployed your smart contract on Subspace EVM! 