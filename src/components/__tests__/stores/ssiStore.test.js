import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useSSIStore } from "../../../stores/ssiStore";

describe("SSI Store", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test("Connection ID is empty on initialization", () => {
        const ssiStore = useSSIStore()

        expect(ssiStore.connectionID).toBe("")
    })

    test("Set connection ID", () => {
        const ssiStore = useSSIStore()
        ssiStore.setConnectionID("abc")

        expect(ssiStore.connectionID).toBe("abc")
    })

    test("Get connection ID", () => {
        const ssiStore = useSSIStore()

        expect(ssiStore.getConnectionID).toBe("")
    })

    test("Get credential definition ID", () => {
        const ssiStore = useSSIStore()

        expect(ssiStore.getCredentialDefinitionID).toBe("CzrQJjwXxFNitzCuiWAWT2:3:CL:102506:Abschlusszeugnis")
    })

    test("Get credential schema ID", () => {
        const ssiStore = useSSIStore()

        expect(ssiStore.getCredentialSchemaID).toBe("PLEVLDPJQMJvPLyX3LgB6S:2:Abschlusszeugnis:1.0")
    })

    test("Get issuer DID", () => {
        const ssiStore = useSSIStore()

        expect(ssiStore.getIssuerDID).toBe("CzrQJjwXxFNitzCuiWAWT2")
    })

    test("Get schema issuer DID", () => {
        const ssiStore = useSSIStore()

        expect(ssiStore.getSchemaIssuerDID).toBe("PLEVLDPJQMJvPLyX3LgB6S")
    })

    test("Get schema name", () => {
        const ssiStore = useSSIStore()

        expect(ssiStore.getSchemaName).toBe("Abschlusszeugnis")
    })

    test("Get schema name", () => {
        const ssiStore = useSSIStore()

        expect(ssiStore.getSchemaName).toBe("Abschlusszeugnis")
    })

    test("Get verkey", () => {
        const ssiStore = useSSIStore()

        expect(ssiStore.getVerkey).toBe("7YGFFq7WXNMsEr82fP8WsQkecZWLATL6z9Lpy8dD1K1r")
    })
})