export default {
    toolbar: {
        my_wallet: '내 월렛',
        create_wallet: '웰렛 생성',
        transfer: '이체 ',
        contract: '컨트렉트 ',
        check_tx: '해시 검색 ',
        sign_raw: '서명 ',
    },
    myWalletPage: {
        my_address: '내 주소 ',
        account_name: '계정명',
        not_registered: '미가입',
        change_wallet: '월렛 변경 ',
        unlock_right_now: '바로 잠금 해제 ',
        select_wallet: '월렛 선택 ',
        please_input_wallet_password: '월렛 비밀번호를 입력해 주세요',
    },
    keystoreInput: {
        please_open_wallet_keystore_file: '월렛에서 Keystore/wallet.json 파일을 열어주세요',
        change_wallet: '월렛 변경 ',
        unlock_now: '바로 잠금 해제 ',
        select_wallet: '월렛 선택 ',
        wallet_password: '월렛 비밀번호 ',
        please_input_wallet_password: '월렛 비밀번호를 입력해 주세요.',
        from_address: ' ~에서 ',
        please_open_locked_file: '잠긴 월렛 파일을 열어 주세요.',
        wallet_password_length_invalid: '비밀번호 길이는 8-30자리 여야합니다 ',
    },
    accountBalances: {
        wallet_balance: '월렛 잔액',
        hide_zero_balances: ' 0잔액 숨기기 ',
    },
    dialogs: {
        please_confirm_tx_info: '거래 정보를 확인하세요 ',
        confirm: '확인',
        cancel: '취소 ',
        unlock_successfully: '잠금 해제 성공 ',
    },
    createWalletPage: {
        title: '월렛 만들기 ',
        please_save_wallet_file_line1: '월렛 비밀번호는 월렛 잠금 해제에 사용되므로, 적절히 보관해주세요',
        passworld_length_notice: '비밀번호 길이는 8-30자리 여야합니다',
        invalid_password_length: '비밀번호 길이 오류 ',
        next_step: '다음 단계 ',
        now_please_download_wallet_keystore_file: '바로 월렛 Keystore파일을 다운로드 해주세요',
        download_wallet_keystore_file: '월렛 Keystore파일 다운로드',
        password_is_to_protect_your_private_keys_please_save_it: '비밀번호는 귀하의 비밀키를 암호화 하는데 사용되므로 적절히 보관하시기 바랍니다. ',
        wallet_file_is_to_get_your_assets_please_save_it: '월렛 파일은 월렛과 자산을 되찾는데 사용되므로 적절히 보관하시기 바랍니다',
        open_wallet_right_now: '바로 월렛 오픈하기',
        please_set_password: '월렛 비밀번호를 설정해 주세요.',
        set_wallet_password: '월렛 비밀번호 설정 ',
        find_wallet_file_in_download_directory: '다운로드 후 다운로드 디렉토리에서 새 월렛 파일을 찾으세요',
        import_mnemonic: 'Import Mnemonic',
        import_mnemonic_placeholder: 'Import Existed Mnemonic(optional)'
    },
    transferPage: {
        account_name: '계정명 ',
        transfer_amount: '이체 금액',
        transfer_amount_in_dialog: '금액 ',
        not_registered: '미가입 ',
        send_to_address: '이 주소로 전송 ',
        please_input_to_address_or_account_name: '상대방의 주소나 가입한 계정명을 입력해 주세요',
        please_select: '선택해 주세요',
        memo_info: '비고 ',
        fee: '수수료 ',
        transfer_right_now: '바로 이체 ',
        to_address: '보내는 주소 ',
        tx_making: ' 거래중 ',
        tx_making_and_will_refresh_after_done: '거래가 진행 중이며, 거래 성공시 자동으로 새로 고침됩니다',
        you_can_also_query_tx_by_tx_hash: '거래 해시를 통해 거래 상태 및 결과를 검색 할 수 있습니다',
        back: '돌아가기',
        tx_failed: '거래 실패',
        tx_success: '거래 성공 ',
        tx_on_chain_success: '거래가 성공적으로 전송되었습니다',
        you_can_query_tx_status_on_chain: 'XWC 블록 체인에서이 거래의 상태와 결과를 확인할 수 있습니다',
        invalid_transfer_amount_format: '잘못된 송금액 형식입니다',
        not_enough_balance: '잔액 부족 ',
        invalid_to_address_format: '잘못된 목적지 주소 형식입니다.',
    },
    checkTxPage: {
        title: '검색 ',
        query_now: '바로 검색 ',
        please_input_txid_or_address: '거래 해시/주소/컨트렉트 주소를 입력해 주세요',
    },
    signRawPage: {
        title: '서명',
        sign_now: "서명해 주세요",
        please_input_content: '서명 할 내용을 입력하세요.',
    },
    customizeNetworkPage: {
        title: '커스터마이즈 노드 ',
        add_network: '노드 추가 ',
        please_input_chain_id: '노드의 Chain ID를 입력해 주세요. ',
        please_input_node_url: '노드의 RPC URL를 입력해 주세요'
    },
    accountInfoPage: {
        my_address: '내 주소 ',
        account_address: '계정 주소 ',
        account_name: '계정명',
        not_registered: '미가입 ',
    },
    contractPage: {
        deploy_nav: '배포 ',
        invoke_nav: '실행 ',
        transfer_to_contract_nav: '컨트렉트로 이전 ',
        select_contract_file: '컨트렉트 파일 선택 ',
        please_select_contract_gpc_file: '컨트렉트 gpc파일을 선택해 주세요. ',
        balance: '잔액 ',
        test: '테스트 ',
        submit: '제출 ',
        return: '돌아가기 ',
        confirm: '확인 ',
        confirmWithSpace: '확인 ',
        transferWithSpace: '이체 ',
        create_tx_id: '거래 ID 만들기',
        creator: '생성자 ',
        contract_address: '컨트렉트 주소 ',
        contract_api: '컨트렉트 API ',
        please_input_contract_address: '컨트렉트 주소를 입력해 주세요. ',
        please_input_contract_api: '컨트렉트 API명칭을 입력해 주세요. ',
        contract_arg: '파라미터 ',
        please_input_invoke_arg: '호출 파라미터를 입력하세요.  ',
        transfer_amount: '이체 수량',
        memo_info: '비고 정보 ',
        please_open_and_unlock_your_wallet_first: '월렛을 먼저 열고 잠금을 해제하세요',
        please_select_contract_file_first: '먼저 컨트렉트 파일을 선택하세요.  ',
        please_input_to_invoke_contract_api: '호출 할 컨트렉트 API를 입력하세요',
        fee: '수수료 ',
        please_select: '선택하세요. ',
        please_emulate_first: '먼저 실행을 에뮬레이트하세요.',
        invalid_gas_price_format: '잘못된 gas price 형식입니다. ',
        invalid_gas_limit_format: '잘못된 gas limit 형식입니다.  ',
        too_large_gas_limit: '',
        tx_not_on_chain_please_query_later: '거래가 아직 체인에 없습니다. 나중에이 거래 ID를 확인하십시오',
        contract_create_height: '블록 높이 생성 ',
    },
    registerAccount: {
        register_account: '계정 만들기 ',
        account_name: '계정명 ',
        please_input_account_name: '계정명을 입력해 주세요. ',
        account_name_rule1: '1. 2-63자리의 부호 ',
        account_name_rule2: "2. 소문자나 숫자 또는 문자만 입력하세요",
        account_name_rule3: '3. 소문자로 시작합니다.',

        fee: '수수료 ',
        register_now: '바로 가입 ',
        register_request_sent_please_refresh_later: '',
        your_account_name: '귀하의 계정명 ',
        return_with_space: '돌아가기 ',
        invalid_account_format: '계정명 형식 오류 ',
        account_registered_before: '사용중인 계정명입니다. ',
        register_account_error_with_reason: '가입 실패. 잔액이 가입 수수료를 지불하기에 충분하지 않거나, 사용중인 계정명입니다',
    },
    account_lock_balances: {
        pledge_information: '투표 정보 ',
        pledge_miner: '투표 Miner ',
        pledge_currency: '코인 투표 ',
        currency: '코인 ',
        income: '수익 ',
        pledge_amount: '투표 수량 ',
        operations: '작업 ',
        append: '추가 ',
        redeem: '회수 ',
        pledge: '투표 ',
        back: '돌아가기 ',
        receive: '수령 ',
        receive_all: '전부 수령 ',
        pledge_income: '투표 수익 ',
    },
    forms: {
        invalid_input_format: "잘못된 입력 형식",
    },
    'Key derivation failed - possibly wrong passphrase': '잠금 해제 실패, 비밀번호가 잘못되었을 가능성이 있습니다',
    'Unsupported key derivation scheme': '잠금 해제 실패, 비밀번호 파일이 잘못되었을 가능성이 있습니다',
    'Unsupported parameters to PBKDF2': 'PBKDF2 에 지원되지 않는 파라미터',
    'Not supported wallet version': '지원되지 않는 월렛 버전',
    'Connection failed': '연결 실패',
    'Connected successfully': '연결 성공',
    'websocket state error': '노드 연결 실패, 새로고침 하거나 노드를 변경해 주세요',
    'Logout': '로그아웃'
};