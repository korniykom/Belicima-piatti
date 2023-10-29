using System;
using System.Collections.Generic;
using src.Domain;
using src.Repositories;

namespace src.Services
{
    public class DogService
    {
        private DogRepository dogRepository;

        public DogService(DogRepository repository)
        {
            dogRepository = repository;
        }

        public IEnumerable<Dog> GetAllDogs()
        {
            return dogRepository.GetAllDogs();
        }

        public Dog GetDogById(int id)
        {
            return dogRepository.GetDogById(id);
        }

        public Dog AddDog(Dog dog)
        {
            return dogRepository.AddDog(dog);
        }

        public void UpdateDog(int id, Dog updatedDog)
        {
            dogRepository.UpdateDog(id, updatedDog);
        }

        public void DeleteDog(int id)
        {
            dogRepository.DeleteDog(id);
        }
    }
}
