import React from "react";
import { render, screen } from "../../test/test-utils";
import { SideBar } from "./SideBar";
import data  from '../../mocks/data/accounts.json'

describe('SideBar', () => {

    test('RenderSide compoenent', async () => {
        render(<SideBar title="Accounts" items={data}/>)

        expect(screen.getByText(/Accounts/i)).toBeInTheDocument();
        expect(screen.getByText(/Brokerage Account/i)).toBeInTheDocument();
        expect(screen.getByText(/Retirement Account/i)).toBeInTheDocument();
        expect(screen.getByText(/Jenny's College Fund/i)).toBeInTheDocument();

    })
})