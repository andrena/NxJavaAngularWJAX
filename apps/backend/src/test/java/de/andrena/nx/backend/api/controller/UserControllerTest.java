package de.andrena.nx.backend.api.controller;

import de.andrena.nx.backend.api.model.User;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class UserControllerTest {

  UserController controller = new UserController();

  @Test
  void getCurrentUser_returnsAdmin() {
    User currentUser = controller.getCurrentUser();

    assertThat(currentUser.userName()).isEqualTo("admin");
    assertThat(currentUser.id()).isEqualTo("01");
  }
}
