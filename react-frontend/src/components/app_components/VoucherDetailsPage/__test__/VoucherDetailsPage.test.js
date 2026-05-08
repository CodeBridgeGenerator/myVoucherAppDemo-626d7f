import React from "react";
import { render, screen } from "@testing-library/react";

import VoucherDetailsPage from "../VoucherDetailsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../../models";

test("renders voucherDetails page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <VoucherDetailsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("voucherDetails-datatable")).toBeInTheDocument();
    expect(screen.getByRole("voucherDetails-add-button")).toBeInTheDocument();
});
