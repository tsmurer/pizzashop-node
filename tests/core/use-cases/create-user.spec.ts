import { User } from '../../../src/core/entities/user';
import { CreateUserInteractor } from '../../../src/core/use-cases/create-user.interactor';
import { UserRepositoryImpl } from '../../../src/persistence/repositories/user.repository.impl';

describe('CreateUserInteractor', () => {
  let createUserInteractor: CreateUserInteractor;
  let userRepository: UserRepositoryImpl;

  beforeEach(() => {
    userRepository = new UserRepositoryImpl();
    createUserInteractor = new CreateUserInteractor(userRepository);
  });

  it('should create a user', async () => {
    // Arrange
    const username = 'testuser';
    const email = 'test@example.com';
    const password = 'password123';

    let user = new User(username, email, password);

    // Act
    const createdUser = await createUserInteractor.execute(user)

    

    // Assert
    // You can add assertions here to check if the user was created successfully
    // For example, you might query the repository to check if the user exists
    // or add additional expectations based on your business logic
  });
});