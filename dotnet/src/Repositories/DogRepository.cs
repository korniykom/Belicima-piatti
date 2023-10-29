using System;
using System.Collections.Generic;
using System.Linq;
using src.Domain;

namespace src.Repositories
{
    public class DogRepository
    {
        private List<Dog> dogs = new List<Dog>();
        private int nextId = 1;

        public IEnumerable<Dog> GetAllDogs()
        {
            return dogs;
        }

        public Dog GetDogById(int id)
        {
            return dogs.FirstOrDefault(d => d.Id == id);
        }

        public Dog AddDog(Dog dog)
        {
            dog.Id = nextId++;
            dogs.Add(dog);
            return dog;
        }

        public void UpdateDog(int id, Dog updatedDog)
        {
            var dogToUpdate = GetDogById(id);
            if (dogToUpdate != null)
            {
                dogToUpdate.Name = updatedDog.Name;
                dogToUpdate.Age = updatedDog.Age;
            }
        }

        public void DeleteDog(int id)
        {
            var dogToRemove = GetDogById(id);
            if (dogToRemove != null)
            {
                dogs.Remove(dogToRemove);
            }
        }
    }
}
