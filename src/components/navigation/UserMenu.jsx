import React from "react";
import {
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const UserMenu = () => {
    const { user, logout } = useAuth();

    return (
        <Menu>
            <MenuButton>
                <Avatar size="sm" name={user.username} />
            </MenuButton>
            <MenuList>
                <MenuItem as={RouterLink} to="/profile">
                    Account
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default UserMenu;
