using System.Linq;
using AutoMapper;
using OutliersAPP.API.Dtos;
using OutliersAPP.API.Models;

namespace OutliersAPP.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User,UserForListDto>()
           .ForMember(dest=>dest.PhotoURL,opt=>{opt.MapFrom(src=>src.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.Age,opt=>{opt.ResolveUsing(src=>src.DateOfBirth.CalculateAge());});

            CreateMap<User,UserForDetailsDto>()
            .ForMember(dest=>dest.PhotoURL,opt=>{opt.MapFrom(src=>src.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.Age,opt=>{opt.ResolveUsing(src=>src.DateOfBirth.CalculateAge());});
            
            CreateMap<Photo,PhotoForDetailsDto>();
            CreateMap<UserForUpdateDto,User>();
            CreateMap<Photo,PhotoForReturnDto>();
            CreateMap<PhotoForCreateDto,Photo>();
            CreateMap<UserForRegisterDto,User>();
            CreateMap<MessageForCreationDto,Message>().ReverseMap();
            CreateMap<Message,MessageToReturnDto>()
            .ForMember(dest=>dest.SenderPhotoUrl,opt=>{opt.MapFrom(src=>src.Sender.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.RecipientPhotoUrl,opt=>{opt.MapFrom(src=>src.Recipient.Photos.FirstOrDefault(p=>p.IsMain).Url);});
            CreateMap<PostForCreationDto,Post>().ReverseMap();
            CreateMap<Post,PostToReturnDto>();
            CreateMap<Post,PostForDetailsDto>()
            .ForMember(dest=>dest.UserPhotoUrl,opt=>{opt.MapFrom(src=>src.User.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.UserKnownAs,opt=>{opt.MapFrom(src=>src.User.KnownAs);});
            CreateMap<Post,PostForListDto>()
            .ForMember(dest=>dest.UserPhotoUrl,opt=>{opt.MapFrom(src=>src.User.Photos.FirstOrDefault(p=>p.IsMain).Url);})
            .ForMember(dest=>dest.UserKnownAs,opt=>{opt.MapFrom(src=>src.User.KnownAs);});
            CreateMap<PostForUpdateDto,Post>();
            CreateMap<CommentForCreationDto,Comment>();
            CreateMap<Comment,CommentForListDto>()
            .ForMember(dest=>dest.UserKnownAs,opt=>{opt.MapFrom(src=>src.User.KnownAs);})
            .ForMember(dest=>dest.UserPhotoUrl,opt=>{opt.MapFrom(src=>src.User.Photos.FirstOrDefault(p=>p.IsMain).Url);});
            CreateMap<Comment,CommentForDetails>()
            .ForMember(dest=>dest.UserKnownAs,opt=>{opt.MapFrom(src=>src.User.KnownAs);})
            .ForMember(dest=>dest.UserPhotoUrl,opt=>{opt.MapFrom(src=>src.User.Photos.FirstOrDefault(p=>p.IsMain).Url);});
            CreateMap<Comment,CommentForReturnDto>();   
            CreateMap<CommentForUpdateDto,Comment>();     
       }
        
    }
}