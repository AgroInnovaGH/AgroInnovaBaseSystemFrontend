export interface USSDAdminUser {
    id: string
    isSuper: boolean
    permission: {
        read: boolean,
        write: boolean,
        delete: boolean,
        credit: boolean,
        process: boolean,
        download: boolean,
        sms: boolean,
        buy: boolean,
        sell: boolean,
        input: boolean,
        akokosika: boolean,
        qrcode: boolean,
        inventory: {
            isInventory: boolean,
            inventoryType: {
                stocking: boolean,
                selling: boolean,
                preview: boolean,
                stockType: {
                    isMaize: boolean,
                    isSoya: boolean,
                    isShea: boolean,
                    isPoultryEggs: boolean,
                    isDocs: boolean,
                    isBroilers: boolean,
                    show: {
                        totalStock: boolean,
                        totalAmount: boolean,
                        totalWeight: boolean
                    }
                }
            }
        },
        processing: {
            isProcessing: boolean,
            preProcessing: boolean,
            onProcessing: boolean,
            postProcessing: boolean
        }
    }
}