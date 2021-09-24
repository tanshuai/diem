initSidebarItems({"constant":[["PRE_GENESIS_VERSION",""]],"enum":[["GovernanceRole",""],["RawTransactionWithData",""],["ScriptABI","How to call a particular Move script (aka. an “ABI”)."],["Transaction","`Transaction` will be the transaction type used internally in the diem node to represent the transaction to be processed and persisted."],["TransactionArgument",""],["TransactionPayload","Different kinds of transactions."],["TransactionStatus","The status of executing a transaction. The VM decides whether or not we should `Keep` the transaction output or `Discard` it based upon the execution of the transaction. We wrap these decisions around a `VMStatus` that provides more detail on the final execution state of the VM."],["WriteSetPayload","Two different kinds of WriteSet transactions."]],"fn":[["parse_transaction_argument",""]],"mod":[["authenticator",""],["default_protocol",""],["helpers",""],["metadata","This file implements Diem transaction metadata types to allow easy parsing and introspection into metadata, whether the transaction is using regular subaddressing, is subject to travel rule or corresponds to an on-chain payment refund."]],"struct":[["AccountTransactionsWithProof","A list of transactions under an account that are contiguous by sequence number and include proofs."],["ArgumentABI","The description of a (regular) argument in a script."],["ChangeSet",""],["Module",""],["RawTransaction","RawTransaction is the portion of a transaction that a client signs."],["RawTransactionHasher","Cryptographic hasher for an BCS-serializable #item"],["RawTransactionWithDataHasher","Cryptographic hasher for an BCS-serializable #item"],["Script","Call a Move script."],["ScriptFunction","Call a Move script function."],["ScriptFunctionABI",""],["SignatureCheckedTransaction","A transaction for which the signature has been verified. Created by [`SignedTransaction::check_signature`] and [`RawTransaction::sign`]."],["SignedTransaction","A transaction that has been signed."],["TransactionHasher","Cryptographic hasher for an BCS-serializable #item"],["TransactionInfo","`TransactionInfo` is the object we store in the transaction accumulator. It consists of the transaction as well as the execution result of this transaction."],["TransactionInfoHasher","Cryptographic hasher for an BCS-serializable #item"],["TransactionListWithProof",""],["TransactionOutput","The output of executing a transaction."],["TransactionOutputListWithProof","This differs from TransactionListWithProof in that TransactionOutputs are stored (no transactions). Events are stored inside each TransactionOutput."],["TransactionScriptABI",""],["TransactionToCommit",""],["TransactionWithProof",""],["TypeArgumentABI","The description of a type argument in a script."],["VMValidatorResult","The result of running the transaction through the VM validator."],["VecBytes","Struct for encoding vector<vector> arguments for script functions"]],"trait":[["TransactionInfoTrait",""]],"type":[["Version",""]]});