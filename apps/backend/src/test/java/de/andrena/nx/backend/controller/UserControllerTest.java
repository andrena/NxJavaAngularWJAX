package de.andrena.nx.backend.controller;

import de.andrena.nx.backend.model.User;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

class UserControllerTest {

  UserController controller = new UserController();

  @Test
  void getCurrentUser_returnsAdmin() {
    User currentUser = controller.getCurrentUser();

    assertThat(currentUser.userName()).isEqualTo("admin");
    assertThat(currentUser.id()).isEqualTo("01");
  }
}
