initSidebarItems({"constant":[["ACQUIRES_COUNT_MAX",""],["ADDRESS_INDEX_MAX",""],["BINARY_SIZE_LIMIT","Upper limit on the binary size"],["BYTECODE_COUNT_MAX",""],["BYTECODE_INDEX_MAX",""],["CONSTANT_INDEX_MAX",""],["CONSTANT_SIZE_MAX",""],["FIELD_COUNT_MAX",""],["FIELD_HANDLE_INDEX_MAX",""],["FIELD_INST_INDEX_MAX",""],["FIELD_OFFSET_MAX",""],["FUNCTION_HANDLE_INDEX_MAX",""],["FUNCTION_INST_INDEX_MAX",""],["IDENTIFIER_INDEX_MAX",""],["IDENTIFIER_SIZE_MAX",""],["LOCAL_INDEX_MAX",""],["MODULE_HANDLE_INDEX_MAX",""],["SIGNATURE_INDEX_MAX",""],["SIGNATURE_SIZE_MAX",""],["SIGNATURE_TOKEN_DEPTH_MAX",""],["STRUCT_DEF_INDEX_MAX",""],["STRUCT_DEF_INST_INDEX_MAX",""],["STRUCT_HANDLE_INDEX_MAX",""],["TABLE_CONTENT_SIZE_MAX",""],["TABLE_COUNT_MAX",""],["TABLE_INDEX_MAX",""],["TABLE_OFFSET_MAX",""],["TABLE_SIZE_MAX",""],["TYPE_PARAMETER_COUNT_MAX",""],["TYPE_PARAMETER_INDEX_MAX",""],["VERSION_1","Version 1: the initial version"],["VERSION_2","Version 2: changes compared with version 1 + function visibility stored in separate byte before the flags byte + the flags byte now contains only the is_native information (at bit 0x2) + new visibility modifiers for “friend” and “script” functions + friend list for modules"],["VERSION_3","Version 3: changes compared with version 2 + phantom type parameters + bytecode for vector operations"],["VERSION_MAX",""]],"enum":[["BinaryConstants","Constant values for the binary format header."],["Opcodes","List of opcodes constants."],["SerializedNativeStructFlag",""],["SerializedType","Constants for signature blob values."],["TableType","Constants for table types in the binary."]],"fn":[["instruction_key","The encoding of the instruction is the serialized form of it, but disregarding the serialization of the instruction’s argument(s)."],["read_u32",""],["read_u8",""],["read_uleb128_as_u64",""]]});