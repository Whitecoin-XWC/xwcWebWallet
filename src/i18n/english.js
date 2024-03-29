export default {
    toolbar: {
        my_wallet: 'My Wallet',
        create_wallet: 'Create Wallet',
        transfer: 'Transfer',
        contract: 'Contract',
        check_tx: 'Check Tx',
        sign_raw: 'Sign',
    },
    myWalletPage: {
        my_address: 'My Address',
        account_name: 'Account Name',
        not_registered: 'Not Registered',
        change_wallet: 'Change Wallet',
        unlock_right_now: 'Unlock now',
        select_wallet: 'Select Wallet',
        please_input_wallet_password: 'Please enter your wallet password',
    },
    keystoreInput: {
        please_open_wallet_keystore_file: 'Please open the wallet keystore/wallet.json file',
        change_wallet: 'Change Wallet',
        unlock_now: 'Unlock now',
        select_wallet: 'Select Wallet',
        wallet_password: 'Wallet Password',
        please_input_wallet_password: 'Please enter your wallet password',
        from_address: 'From',
        please_open_locked_file: 'Please open locked wallet file',
        wallet_password_length_invalid: 'Password length should be 8-30',
    },
    accountBalances: {
        wallet_balance: 'Balances',
        hide_zero_balances: 'Hide zero balances',
    },
    dialogs: {
        please_confirm_tx_info: 'Please confirm the transaction information',
        confirm: 'OK',
        cancel: 'Cancel',
        unlock_successfully: 'Unlock successfully',
    },
    createWalletPage: {
        title: 'Create Wallet',
        please_save_wallet_file_line1: 'The wallet password is used to unlock the wallet, please save it properly',
        passworld_length_notice: 'Password length is 8 to 30 digits',
        invalid_password_length: 'Invalid password length',
        next_step: 'Next Step',
        now_please_download_wallet_keystore_file: 'Now download the wallet keystore file',
        download_wallet_keystore_file: 'Download Wallet Keystore File',
        password_is_to_protect_your_private_keys_please_save_it: 'The password is used to encrypt your private key, so be sure to save it.',
        wallet_file_is_to_get_your_assets_please_save_it: 'Wallet files are used to import and retrieve your wallet and assets, so be sure to save them properly',
        open_wallet_right_now: 'Open the wallet now',
        please_set_password: 'Please set wallet password',
        set_wallet_password: 'Set wallet password',
        find_wallet_file_in_download_directory: 'Please find your new wallet file in download directory after downloaded',
        import_mnemonic: 'Import Mnemonic',
        import_mnemonic_placeholder: 'Import Existed Mnemonic(optional)'
    },
    transferPage: {
        account_name: 'Account',
        transfer_amount: 'Amount',
        transfer_amount_in_dialog: 'Amount',
        not_registered: 'Not Registered',
        send_to_address: 'To Address',
        please_input_to_address_or_account_name: 'Please enter the address of the other party or the registered account name',
        please_select: 'Please Select',
        memo_info: 'Memo',
        fee: 'Fee',
        transfer_right_now: 'Transfer immediately',
        to_address: 'To Address',
        tx_making: 'Transaction is under construction',
        tx_making_and_will_refresh_after_done: 'The transaction is in progress and the transaction will be automatically refreshed',
        you_can_also_query_tx_by_tx_hash: 'You can also query transaction status and results by trading hashes.',
        back: 'Return',
        tx_failed: 'Transaction Failed',
        tx_success: 'Transaction Successed',
        tx_on_chain_success: 'The transaction has been successfully sent',
        you_can_query_tx_status_on_chain: 'You can check the status and results of this transaction on the XWC blockchain.',
        invalid_transfer_amount_format: 'Invalid transfer amount format',
        not_enough_balance: 'Balance not enough',
        invalid_to_address_format: 'Invalid destination address format',
    },
    checkTxPage: {
        title: 'Query',
        query_now: 'Query Now',
        please_input_txid_or_address: 'Enter tx hash/address/contract address',
    },
    signRawPage: {
        title: 'Sign',
        sign_now: "Sign",
        please_input_content: 'Enter content to sign',
    },
    customizeNetworkPage: {
        title: 'Customize Network',
        add_network: 'Add Network',
        please_input_chain_id: 'Please input node Chain ID',
        please_input_node_url: 'Please input node rpc url'
    },
    accountInfoPage: {
        my_address: 'My Address',
        account_address: 'Address',
        account_name: 'Account Name',
        not_registered: 'Not Registered',
    },
    contractPage: {
        deploy_nav: 'Deploy',
        invoke_nav: 'Invoke',
        transfer_to_contract_nav: 'Transfer to contract',
        select_contract_file: 'Contract file',
        please_select_contract_gpc_file: 'Please select contract gpc file',
        balance: 'Balance',
        test: 'Test',
        submit: 'Submit',
        confirm: 'Confirm',
        confirmWithSpace: 'Confirm',
        transferWithSpace: 'Transfer',
        create_tx_id: 'Create tx id',
        creator: 'Creator',
        contract_address: 'Contract Address',
        contract_api: 'Contract API',
        please_input_contract_address: 'Enter the contract address',
        please_input_contract_api: 'Enter contract api name',
        contract_arg: 'Argument',
        please_input_invoke_arg: 'Enter invoke argument',
        transfer_amount: 'Transfer amount',
        memo_info: 'Memo',
        please_open_and_unlock_your_wallet_first: 'Please open and unlock the wallet first',
        please_select_contract_file_first: 'Please select contract file first',
        please_input_to_invoke_contract_api: 'Please enter the contract API to be called',
        fee: 'Fee',
        please_select: 'Please select',
        please_emulate_first: 'Please emulate execution first',
        invalid_gas_price_format: 'Incorrect gas price format',
        invalid_gas_limit_format: 'Incorrect gas limit format',
        too_large_gas_limit: 'Too large gas limit',
        tx_not_on_chain_please_query_later: 'The transaction is not yet online. Please check this transaction ID later',
        contract_create_height: 'Create Block Height',
    },
    registerAccount: {
        register_account: 'Register Account',
        account_name: 'Account Name',
        please_input_account_name: 'Please enter account name',
        account_name_rule1: '1. 2-63 characters',
        account_name_rule2: "2. Only enter lowercase letters or numbers or char '-'",
        account_name_rule3: '3. Start with a lowercase letter',
        fee: 'Fee',
        register_now: 'Register Now',
        register_request_sent_please_refresh_later: 'Registration request has been sent, please wait 5 seconds to refresh the interface',
        your_account_name: 'Your account name',
        return_with_space: 'Back',
        invalid_account_format: 'Incorrect account name format',
        account_registered_before: 'This account name has been registered',
        register_account_error_with_reason: 'Registration failed, the balance may not be enough to pay the registration fee, or the account name has been registered',
    },
    account_lock_balances: {
        pledge_information: 'Vote information',
        pledge_miner: 'Miner',
        pledge_currency: 'Currency',
        currency: 'Currency',
        income: 'Income',
        pledge_amount: 'Amount',
        operations: 'Operations',
        append: 'Append',
        redeem: 'Redeem',
        pledge: 'Vote',
        back: 'Back',
        receive: 'Receive',
        receive_all: 'Receive All',
        pledge_income: 'Vote income',
    },
    forms: {
        invalid_input_format: "Invalid input format",
    },
    'Key derivation failed - possibly wrong passphrase': 'Key derivation failed - possibly wrong passphrase',
    'Unsupported key derivation scheme': 'Unsupported key derivation scheme',
    'Unsupported parameters to PBKDF2': 'Unsupported parameters to PBKDF2',
    'Not supported wallet version': 'Not supported wallet version',
    'Connection failed': 'Connection failed',
    'Connected successfully': 'Connected successfully',
    'websocket state error': 'websocket state error',
    'Logout': 'Logout'
};